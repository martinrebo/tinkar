import React, { useState, useEffect, useRef } from 'react';
import { useStateValue } from '../../State/State';
import CardView from '../../Components/Card/CardView';
import { fire } from '../../fire';
import Slider from "react-slick";
import { relative } from 'path';


export default function MainPage() {


    const [dataCard, setDataCard] = useState([]);
    useEffect(() => {

        fire.collection('card').orderBy("created", "desc")
            .onSnapshot(
                function (querySnapshot) {
                    let data = querySnapshot.docs.map(function (documentSnapshot) {
                        return documentSnapshot.data();
                    });
                    setDataCard(data);
                    console.log(data);
                })
    }, []);



    const [{ theme }, dispatch] = useStateValue();


    return (
        <>
            <div className="card-container ">
                <div id="root-deck-card">
                    <Slider lazyLoad="progressive">
                        {dataCard.map((dataCard, index) => {
                            return (
                                <div key={index}>
                                    <CardView
                                        title={dataCard.title}
                                        description={dataCard.description}
                                        link={dataCard.link}
                                        media={dataCard.media}
                                        mediaType={dataCard.mediaType}
                                        position={dataCard.position}
                                        eco = {dataCard.eco}
                                        tags={dataCard.tags}
                                        duration = {dataCard.duration}
                                        style={{ color: theme.primary }}
                                        background={theme.cardBack}
                                        border={theme.primary}
                                        docid={dataCard.docid}
                                        likes={dataCard.likes}
                                        uid={dataCard.uid}
                                        username={dataCard.userName}
                                        created={dataCard.created}
                                    />

                                </div>
                            )
                        })}
                    </Slider>
                </div>

            </div>

        </>
    )
}