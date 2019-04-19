import React, { useState, useEffect, useRef } from 'react';
import { useStateValue } from '../../State/State';
import CardResearch from '../../Components/Card/CardResearch';
import { fire } from '../../fire';
import Slider from "react-slick";


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
                    console.log( data);
                })
    }, []);


    const [{ theme }, dispatch] = useStateValue();


    return (
        <>
                <div className="card-container ">
                    <div id="root-deck-card">
<Slider lazyLoad="progressive" > 
                                {dataCard.map((dataCard, index) => {
                                    return (
                                    <CardResearch key={index}
                                        title={dataCard.title}
                                        description={dataCard.description}
                                        link={dataCard.link}
                                        branch={dataCard.branch}
                                        type={dataCard.type}
                                        style={{ color: theme.primary }}
                                        background={theme.cardBack}
                                        border={theme.primary}
                                        
                                    />

                                    )
                                })}
</Slider>
                    </div>

                </div>

        </>
    )
}