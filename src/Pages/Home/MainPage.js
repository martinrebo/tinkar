import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../State/State';
import CardResearch from '../../Components/Card/CardResearch';
import { fire } from '../../fire';

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
            <div className="content-video" style={{ color: theme.primary, background: theme.background }} >
                <p> mainpage {dataCard.length} Research Cards   </p>
                {dataCard.map((dataCard, index) => {
                    return <CardResearch key={index}
                        title={dataCard.title}
                        description={dataCard.description}
                        link={dataCard.link}
                        branch={dataCard.branch}
                        type={dataCard.type}
                        style={{ color: theme.primary }}
                    />
                })}

            </div>

        </>
    )
}