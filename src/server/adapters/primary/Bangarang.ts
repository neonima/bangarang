import { UserServiceProvider } from "../../core/serviceProviders/UserServiceProvider";
import { BallotServiceProvider } from "../../core/serviceProviders/BallotServiceProvider";
import type { InteractWithBallotProvider } from "../../core/ports/InteractWithBallotProvider";
import type { InteractWithIdentityProvider } from "../../core/ports/InteractWithIdentityProvider";
export class Bangarang implements BangarangContract {
    constructor(interactWithIdentityProvider: InteractWithIdentityProvider, interactWithBallotProvider: InteractWithBallotProvider) {
        this.ballotServiceProvider = new BallotServiceProvider(interactWithBallotProvider);
        this.userServiceProvider = new UserServiceProvider(interactWithIdentityProvider, this.ballotServiceProvider);
    }
    readonly userServiceProvider: UserServiceProvider;
    readonly ballotServiceProvider: BallotServiceProvider;
}
interface BangarangContract {
    userServiceProvider:UserServiceProvider
    ballotServiceProvider:BallotServiceProvider
}