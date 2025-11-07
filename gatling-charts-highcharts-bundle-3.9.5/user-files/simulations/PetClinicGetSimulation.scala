import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class PetClinicGetSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("http://aec254d78c4d2493080be135e79a83f9-612172463.eu-west-2.elb.amazonaws.com/petclinic")
    .acceptHeader("application/json")

  val feeder = csv("C:\\Users\\SHYAM NAGARAJAN\\gatling-charts-highcharts-bundle-3.9.5-bundle\\gatling-charts-highcharts-bundle-3.9.5\\user-files\\data\\owners.csv").circular

  val scn = scenario("GET Owners with Validation")
    .forever(
      feed(feeder)
      .exec(
        http("Fetch All Owners")
          .get("/api/owners")
          .check(jsonPath("$[*].lastName").findAll.saveAs("lastNames"))
      )
      .exec { session =>
        val expectedLastName = session("lastName").as[String]
        val lastNames = session("lastNames").asOption[Seq[String]].getOrElse(Seq.empty)
        if (lastNames.contains(expectedLastName)) {
          session.markAsSucceeded
        } else {
          session.markAsFailed
        }
      }
      .pause(2) // Optional pacing
    )

  setUp(
    scn.inject(rampUsers(10).during(30.minutes))
  ).protocols(httpProtocol)
   .maxDuration(30.minutes)
}