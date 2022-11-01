import React from "react";
import {
  ListClothingItems,
  ListShoesItems,
  ListKidsItems,
  ListFeaturedItems,
} from "./ListBottomItems";

const ListBottom = () => {
  return (
    <div className="list-bottom">
      <div className="main_content">
        <div className="Shoes box">
          <ul>
            <li>
              <p className="titr_list">Shoes</p>
            </li>
            {ListShoesItems.map((item, index) => {
              return (
                <div key={index}>
                  <li>
                    <a href={item.url}>{item.title}</a>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>

        <div className="clothing box">
          <ul>
            <li>
              <p className="titr_list">Clothing</p>
            </li>
            {ListClothingItems.map((item, index) => {
              return (
                <div key={index}>
                  <li>
                    <a href={item.url}>{item.title}</a>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>

        <div className="Kids box">
          <ul>
            <li>
              <p className="titr_list">Kids'</p>
            </li>
            {ListKidsItems.map((item, index) => {
              return (
                <div key={index}>
                  <li>
                    <a href={item.url}>{item.title}</a>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>

        <div className="Featured box">
          <ul>
            <li>
              <p className="titr_list">Featured</p>
            </li>
            {ListFeaturedItems.map((item, index) => {
              return (
                <div key={index}>
                  <li>
                    <a href={item.url}>{item.title}</a>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListBottom;
