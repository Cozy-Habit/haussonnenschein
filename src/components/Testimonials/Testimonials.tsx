"use client";

import Image from "next/image";
import Typography from "../Typography/Typography";
import styles from "./Testimonials.module.scss";
import ColorfulText from "../ColorfulText/ColorfulText";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import clsx from "clsx";
import { useTranslation } from "@/i18n/LanguageProvider";

type Testimonial = {
	id: string;
	title: string;
	description: string;
	imgSrc: string;
};

function getMap(ref: MutableRefObject<null | any>) {
	if (!ref.current) ref.current = new Map();
	return ref.current;
}

export default function Testimonials() {
	const { t } = useTranslation();

	const TESTIMONIALS: Testimonial[] = [
		{
			id: "1",
			title: "Susanne & Eliot",
			description: t("home.testimonials.items")[0],
			imgSrc: "/assets/testimonials/01.png",
		},
		{
			id: "2",
			title: "Barbara & Sven",
			description: t("home.testimonials.items")[1],
			imgSrc: "/assets/testimonials/02.png",
		},
		{
			id: "3",
			title: "Merle & Denis",
			description: t("home.testimonials.items")[2],
			imgSrc: "/assets/testimonials/03.png",
		},
		{
			id: "4",
			title: "Lena & Mike",
			description: t("home.testimonials.items")[3],
			imgSrc: "/assets/testimonials/04.png",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [firstRender, setFirstRender] = useState(true);
	const ref = useRef(null);
	const isLast = TESTIMONIALS.length - 1 === currentIndex;
	const isFirst = currentIndex === 0;

	function next() {
		if (isLast) return setCurrentIndex(0);
		setCurrentIndex(currentIndex + 1);
	}

	function prev() {
		if (isFirst) return setCurrentIndex(TESTIMONIALS.length - 1);
		setCurrentIndex(currentIndex - 1);
	}

	useEffect(() => {
		if (firstRender) {
			setFirstRender(false);
			return;
		}
		if (ref === null) return;

		const refMap = getMap(ref);
		const item = refMap.get(currentIndex);

		item.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center",
		});
	}, [currentIndex]);

	return (
		<div className={styles.testimonials}>
			<ColorfulText
				text={t("home.testimonials.title")}
				type="h1"
				as="h2"
			/>
			<ul className={styles.testimonials__list}>
				{TESTIMONIALS.map(
					({ id, description, imgSrc, title }, index) => {
						const refMap = getMap(ref);
						return (
							<li
								key={id}
								ref={(node) => refMap.set(index, node)}
								className={styles.testimonials__item}
							>
								<Image
									className={styles.testimonials__image}
									src={imgSrc}
									height={100}
									width={100}
									alt=""
								/>
								<div>
									<Typography
										type="body-semibold"
										fontFamily="lilita"
									>
										{title}
									</Typography>
									<Typography type="body-semibold">
										{description}
									</Typography>
								</div>
							</li>
						);
					},
				)}
			</ul>
			<div className={styles.testimonials__controls}>
				<ButtonPrimary onClick={prev}>{"<"}</ButtonPrimary>
				<div className={styles.testimonials__dotList}>
					{TESTIMONIALS.map((_, index) => {
						return (
							<div
								key={index}
								className={clsx(styles.testimonials__dotItem, {
									[styles["testimonials__dotItem--active"]]:
										index === currentIndex,
								})}
							></div>
						);
					})}
				</div>
				<ButtonPrimary onClick={next}>{">"}</ButtonPrimary>
			</div>
		</div>
	);
}
