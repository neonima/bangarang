<script lang="ts">
    import type { DescriptionCardContract } from "../../interfaces/DescriptionCardContract";
    import DescriptionCard from "../Cards/DescriptionCard.svelte"
    const BusinessModelValues:Array<DescriptionCardContract> = [
        {
            title:"What is Banagang?",
            description:"Bangarang is an open source and free democratic claim system that allow anybody to:",
            bulletPoints:[
                "create a claim",
                "search for claims",
                "claiming anonymously"
            ]
        },
        {
            title:"Definition of Bangarang",
            description:"",
            bulletPoints:[
                "Battle cry of the Lost Boys in the movie Hook.",
                "Jamaican slang defined as a hubbub, uproar, disorder, or disturbance.",
                "General exclamation meant to signify approval or amazement."
            ]
        },
        {
            title:"Why this name?",
            description:"",
            bulletPoints:[
                "Individuals act like Lost Boys. They are a family within each other. They also have strong spiritual and social beliefs. Furthermore, they are hard workers and want to help not only themselves but each other.",
                "Organizations and leaders act like Pirates. They are looking for power and profit. They also have strong growth and control main beliefs. Not only that, but they are delegating work and want to help themselves and their partners.",
                "The solution must act as a disturbance of current systems by providing lead to insectioniduals. But individuals must not have more lead each other.",
                "By providing lead to individuals and guarantee this lead with equality, this should provide global amazement and systemic breakthrough"
            ]
        }
    ];
</script>
<main class="flex-grow overflow-y-auto">
    {#each BusinessModelValues as businessModelValue }
        <DescriptionCard descriptionCardContract={businessModelValue}/>
    {/each}
</main>