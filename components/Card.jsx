import React from "react"
import star from '../src/assets/star.png'

export default function Card(props) {
    return (
        <div className="cards">
          <div className="card">
            <img src={'../'+props.item.image} />
            <div className="stats">
              <img src={star} />
              <span>{props.item.stats.rating}</span> 
              <span className="gray">({props.item.stats.reviewCount}) .</span>
              <span className="gray">{props.item.location}</span>
            </div>
            <p className="title">{props.item.title}</p>
            <p>
              <span className="bold">From ${props.item.price}</span> / person
            </p>
          </div>
        </div>
    )
}