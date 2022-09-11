import { Coach } from "./Coach";

    export class GolfCoach implements Coach{
        getDailyWorkout(): string {
            return "打golf都有錢人"
        }

    }