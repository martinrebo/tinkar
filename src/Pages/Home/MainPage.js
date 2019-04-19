import React, { useState, useEffect, useRef } from 'react';
import { useStateValue } from '../../State/State';
import CardResearch from '../../Components/Card/CardResearch';
import { fire } from '../../fire';
import SwipeableViews from 'react-swipeable-views';


export default function MainPage() {


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
        <>
            <div style={{ color: theme.primary, background: theme.background }} >
                <p> Mainpage {dataCard.length} Research Cards   </p>
                <div className="card-container ">
                    <div id="root-deck-card">
<SwipeableViews enableMouseEvents resistance="true"> 
                                {dataCard.map((dataCard, index) => {
                                    return (
                                    <div> 
                                    <CardResearch key={index}
                                        title={dataCard.title}
                                        description={dataCard.description}
                                        link={dataCard.link}
                                        branch={dataCard.branch}
                                        type={dataCard.type}
                                        style={{ color: theme.primary }}
                                    />
                                    </div>
                                    )
                                })}
</SwipeableViews>
                    </div>

                </div>
            </div>

        </>
    )
}