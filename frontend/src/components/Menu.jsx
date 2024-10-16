import React from 'react'
import { data } from '../restApi.json'
const Menu = () => {
    return (
        <>
            <section className='menu' id='menu'>
                <div className="container">
                    <div className="heading_section">
                        <h1 className="heading">POPULAR DISHES</h1>
                        <p>
                            <b>Here are some popular dishes you could highlight for each cuisine at AZIM:</b>
                            <br />

                            Indian:

                            Butter Chicken: Tender chicken cooked in a creamy, spiced tomato sauce.
                            Paneer Tikka: Marinated and grilled paneer cubes served with mint chutney.
                            Biryani: Aromatic basmati rice cooked with fragrant spices and your choice of chicken, lamb, or vegetables.
                            <br />
                            Mexican:

                            Tacos al Pastor: Soft corn tortillas filled with marinated chicken, pineapple, and fresh cilantro.
                            Guacamole & Chips: Creamy avocado dip with a hint of lime, served with crispy tortilla chips.
                            Enchiladas: Rolled tortillas filled with cheese and chicken, smothered in red or green sauce.
                            <br />
                            Chinese:

                            Kung Pao Chicken: Stir-fried chicken with peanuts, vegetables, and chili peppers in a tangy sauce.
                            Sweet and Sour chicken: Crispy chicken bites in a sweet and tangy sauce, served with steamed rice.
                            Spring Rolls: Crispy rolls filled with seasoned vegetables and served with a dipping sauce.
                            <br />

                            Italian:

                            Margherita Pizza: Classic pizza topped with fresh tomatoes, mozzarella, and basil.
                            Spaghetti Carbonara: Pasta tossed in a creamy sauce with pancetta, egg, and Parmesan cheese.
                            Tiramisu: A traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.
                            These dishes can help showcase the variety and appeal of the cuisines offered at AZIM!
                        </p>
                    </div>
                    <div className="dishes_container">
                        {
                            data[0].dishes.map(element => (
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt={element.title} />
                                    <h3>{element.title}</h3>
                                    <button>{element.category}</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu