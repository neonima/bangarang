<script lang="ts">
import type { ClaimChoice } from "../../port/ClaimChoice";

    //import { beforeUpdate } from 'svelte';
    import ClaimButton from "../Buttons/ClaimButton.svelte"
    //import {checkingIfUserAlreadyClaimedOnClaimStore} from "../../stores/checkingUserAlreadyClaimedOnClaimStore"
    //import {checkingUserAlreadyClaimedOnClaim} from "../../logic/checkingUserAlreadyClaimedOnClaim"
    //import {connectedUserStore} from "../../stores/connectedUserStore"
    export let peopleClaimed:number=0
    export let peopleFor:number=0
    export let peopleAgainst:number=0
    export let claimId:string=""
    export let userClaimingChoice:ClaimChoice=undefined
    //let connectedUserId:string|null =null;
    //connectedUserStore.subscribe(connectedUser => {(connectedUser === null)? connectedUserId = null: connectedUserId=connectedUser.id})
    //beforeUpdate(()=> checkingUserAlreadyClaimedOnClaim(claimId))
    const retreivePercentage = (total:number,part:number):number => (total>0)?part/total*100:0
</script>
<main class="flex flex-col mx-auto max-w-screen-2xl my-2">
    <p class="text-center text-bangarang-lightEmphasis my-2">{peopleClaimed}<br>people claimed</p>
    <section class="flex justify-between my-1 mx-4">
        <section class="flex flex-col w-1/3">
            <ClaimButton {claimId} {userClaimingChoice} claimingChoice="Against"/>
            <p class="text-center text-bangarang-lightEmphasis">{retreivePercentage(peopleClaimed,peopleAgainst).toFixed(2)}%</p>
        </section>
        <section class="flex flex-col w-1/3">
            <ClaimButton {claimId} {userClaimingChoice} claimingChoice="For"/>
            <p class="text-center text-bangarang-lightEmphasis">{retreivePercentage(peopleClaimed,peopleFor).toFixed(2)}%</p>
        </section>
    </section>
</main>