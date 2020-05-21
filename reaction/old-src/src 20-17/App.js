import React, { useReducer } from "react";

const dogs = [{
        name: "Harry",
        image: "https://images.dog.ceo/breeds/vizsla/n02100583_10960.jpg",
        praiseCount: 0,
        scoldCount: 0
    },
    {
        name: "Hermione",
        image: "https://images.dog.ceo/breeds/husky/n02110185_1511.jpg",
        praiseCount: 0,
        scoldCount: 0
    }
];

function Count() {
    const [count, dispatch] = useReducer((state, action) => {
        if (action === "addPraise") {
            return state + 1;
        } else if (action === "addScold") {
            return state - 1;
        } else {
            return state;
        }
    }, 0);


    return ( < div className = "App" >
        <
        div className = "row mt-5" > {
            dogs.map(item => ( < div key = { item.name }
                className = "card mx-auto col-4" >
                <
                img className = "card-img-top"
                src = { item.image }
                alt = { item.name }
                /> <div className="card-body"> <h4 className="card-title" > {item.name}</h
                4 > < p className = "card-text" > { item.name }
                has been praised { praiseCount }
                times! < /p> <button className="btn btn-primary" > Praise </button >
                <
                /div>  <
                /div>
            ))
        } < /div> </div >
    );
}

export default Count;