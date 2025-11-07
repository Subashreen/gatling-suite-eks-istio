import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class PetClinicPostSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("http://aec254d78c4d2493080be135e79a83f9-612172463.eu-west-2.elb.amazonaws.com/petclinic")
    .acceptHeader("application/json")
    .contentTypeHeader("application/json")

  // Use absolute path to avoid resource loading issues
  val feeder = csv("C:\\Users\\SHYAM NAGARAJAN\\gatling-charts-highcharts-bundle-3.9.5-bundle\\gatling-charts-highcharts-bundle-3.9.5\\user-files\\data\\owners.csv").circular

  val scn = scenario("POST Owners")
    .forever(
      feed(feeder)
      .exec { session =>
        val json = s"""{
          "firstName": "${session("firstName").as[String]}",
          "lastName": "${session("lastName").as[String]}",
          "address": "${session("address").as[String]}",
          "city": "${session("city").as[String]}",
          "telephone": "${session("telephone").as[String]}"
        }"""
        println("Request Body:\n" + json)
        session
      }
      .exec(
        http("Create Owner")
          .post("/api/owners")
          .body(StringBody(
            """{
              "firstName": "#{firstName}",
              "lastName": "#{lastName}",
              "address": "#{address}",
              "city": "#{city}",
              "telephone": "#{telephone}"
            }"""
          )).asJson
          .check(status.in(200, 201))
      )
      .pause(2) // Optional pacing between requests
    )

  setUp(
    scn.inject(rampUsers(10).during(30.minutes))
  ).protocols(httpProtocol)
   .maxDuration(30.minutes)
}