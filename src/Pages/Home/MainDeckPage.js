import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../State/State';
import CardResearch from '../../Components/Card/CardResearch';
import { fire } from '../../fire';
import Deck from './Deck';

export default function MainDeckPage() {


    const [dataCard, setDataCard] = useState([])

    useEffect(() => {

        fire.collection('card').orderBy("created", "desc")
            .onSnapshot(
                function (querySnapshot) {
                    let data = querySnapshot.docs.map(function (documentSnapshot) {
                        return documentSnapshot.data();
                    });
                    setDataCard(data);
                })
    }, []);

    const [{ theme }, dispatch] = useStateValue();

    return (
        <div className="deck-container">
        <div id="root-deck">
        <Deck/>
        </div>
        </div>
    )
}