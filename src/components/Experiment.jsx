import { useState, useEffect } from "react";

function Experiment() {


    // Keeping track of the current cards clicked
    const [currentCards, setCurrentCards] = useState({ card1: null, card2: null });

    const buildData = () => {

        /*
        *
        * STAGE 1 - GET IMAGES FROM API 
        * 
        */
        // Fake data
        const mockApiResponse = {
            data: [
                {
                    image: "https://plchldr.co/i/100x100?&bg=000000&fc=FFFFFF&text=CARD"
                },
                {
                    image: "https://plchldr.co/i/100x100?&bg=c20121&fc=FFFFFF&text=CARD"
                },
                {
                    image: "https://plchldr.co/i/100x100?&bg=2b9643&fc=FFFFFF&text=CARD"
                },
                {
                    image: "https://plchldr.co/i/100x100?&bg=4356ef&fc=FFFFFF&text=CARD"
                },
                {
                    image: "https://plchldr.co/i/100x100?&bg=f39775&fc=FFFFFF&text=CARD"
                },
                {
                    image: "https://plchldr.co/i/100x100?&bg=b6c8ce&fc=FFFFFF&text=CARD"
                },
                {
                    image: "https://plchldr.co/i/100x100?&bg=c1a8f8&fc=FFFFFF&text=CARD"
                },
                {
                    image: "https://plchldr.co/i/100x100?&bg=11ae6c&fc=FFFFFF&text=CARD"
                },
                {
                    image: "https://plchldr.co/i/100x100?&bg=d64f87&fc=FFFFFF&text=CARD"
                },
                {
                    image: "https://plchldr.co/i/100x100?&bg=2eabba&fc=FFFFFF&text=CARD"
                }
            ]
        }

        /*
        *
        * STAGE 2 - CREATE CARDS DATA BASED ON IMAGES FROM API
        * 
        */

        // Putting response data into cards array
        let cards = mockApiResponse.data.map((item, i) => {

            return ({
                pair: i,
                image: item.image,
                isMatched: "false"
            });

        });

        /*
        *
        * STAGE 3 - CONCATENATE THE CARDS TO CREATE PAIRS 
        * TO DO: NEED TO SHUFFLE CARDS
        */        

        // Concat cards array so card pairs are created
        cards = cards.concat(cards);

        // onClick function

        /*
        *
        * STAGE 4 - CREATE ONCLICK EVENT
        * FINDS OUT WHICH CARD WAS CLICKED AND KEEPS TRACK OF IT
        */

        const handleClick = (e) => {

            //const [currentCards, setCurrentCards] = useState({ card1: null, card2: null });

            e.preventDefault();

            //console.log(e)

            // Get the current card id
            const cardClicked = parseInt(e.currentTarget.getAttribute("data-cardid"));

            // Get the pair associated with the card
            const cardClickedPair = parseInt(e.currentTarget.getAttribute("data-cardpair"));

            
            console.log(`Card Clicked: ${cardClicked}. Card Pair:${cardClickedPair}`)


            // If the currentCards data is empty, we want to populate it with the two cards the user picked.
            if(currentCards.card1===null){
                setCurrentCards({...currentCards,card1:{id:cardClicked, pair:cardClickedPair}})
            } else if (currentCards.card2===null){
                setCurrentCards({...currentCards,card2:{id:cardClicked, pair:cardClickedPair}})
            }

        }

        /*
        *
        * STAGE 5 - CREATE THE GRID OF CARDS ON THE PAIRS
        * 
        */


        if (cards.length === 20) {

            // Create the card html to display on the page
            return (cards.map((card, i) => {
                return (
                    <div key={i} data-cardid={i} data-cardpair={card.pair} className={card.isMatched} onClick={handleClick}>
                        <img src={card.image} />
                    </div>
                )
            }));
        }

    }

        /*
        *
        * STAGE 6 - CHECK IF CARDS SELECTED MATCH
        * 
        */
    // A use effect that is triggered whenever the currentCards state is updated
    useEffect(()=>{

        // card1: Object { id: 6, pair: 6 }
        //         ​​id: 6
        //         ​​pair: 6
        // ​card2: Object { id: 4, pair: 4 }
        //         id: 4
        //         pair: 4

        console.log("use effect called")
        console.log(currentCards)

        // check if both cards have been picked by the user

        // GRAB CARD 1 DATA
        const card1 = currentCards.card1;

        // GRAB CARD 2 DATA
        const card2 = currentCards.card2;

        // IF BOTH CARD 1 & CARD 2 ARE SELECTED, FIGURE OUT IF THEY MATCH
        if(card1 && card2){

            if(card1.pair === card2.pair){
                console.log("Pairs are matched")
            } else {
                console.log("Pairs are not matched, retry!")

                // RESET USER SELECTION
                setCurrentCards({...currentCards,card1:null})
                setCurrentCards({...currentCards,card2:null})
            }
            
        }

        

        
    },[currentCards])


    return <div>{buildData()}</div>

}


export default Experiment;