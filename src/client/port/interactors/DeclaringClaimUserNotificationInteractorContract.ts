import type { UserNotificationContract } from "../UserNotification"
import type { UserNotificationInteractorContract } from "./UserNotificationInteractorContract"
export type DeclaringClaimNotificationType = "Declaring claim."
export interface DeclaringClaimUserNotificationInteractorContract extends UserNotificationInteractorContract {
    notify(userNotification: DeclaringClaimUserNotificationContract): void;
}
export interface DeclaringClaimUserNotificationContract extends UserNotificationContract {
    type:DeclaringClaimNotificationType
}
export const successDeclaringClaimUserNotification:DeclaringClaimUserNotificationContract = {status:"Success", message:"Declared.",type:"Declaring claim."}
export const claimWithoutTitleDeclaringClaimUserNotification:DeclaringClaimUserNotificationContract = {status:"Failed", message:"A claim must have a title.",type:"Declaring claim."}
export const claimWithoutTypeDeclaringClaimUserNotification:DeclaringClaimUserNotificationContract = {status:"Failed", message:"A claim must have a type.",type:"Declaring claim."}
export const claimAlreadyExistDeclaringClaimUserNotification = (claimTitle:string):DeclaringClaimUserNotificationContract => ({status:"Failed", message:`The claim "${claimTitle}" already exist`,type:"Declaring claim."})


