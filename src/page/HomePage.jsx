import React from "react";
import "./HomePage.scss";

const HomePage = () => {
	return (
		<section className="home max-w-screen-2xl mx-auto">
			<div className="header-message">
				<h1>Построим устойчивое будущее вместе</h1>
				<button className="btn-header-blue">Выбрать готовые проекты</button>
				<button className="btn-header-white">Получить консультацию</button>
			</div>
		</section>
	);
};

export default HomePage;
