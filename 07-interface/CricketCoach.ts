import { Coach } from "./Coach";


export class CricketCoach implements Coach{
    getDailyWorkout(): string {
        return "給我練習練習再練習"
    }
    
}