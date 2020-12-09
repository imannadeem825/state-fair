const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
        return contentTarget.innerHTML += `
        <div class="gawker person"></div>
        `
        
    })
}