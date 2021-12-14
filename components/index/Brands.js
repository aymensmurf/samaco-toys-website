import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { withTranslation } from "../../i18n";
import HoverImg from "../widgets/HoverImg";
import { BRANDS } from "../../utils/consts";

const Brands = ({ t }) => {
	const [loadMore, setLoadMore] = useState(false);

	return (
		<section id="brands" style={{ paddingBottom: 100 }}>
			<ScrollAnimation animateIn="fadeInUp">
				<h2>{t("we_are_proud")}:</h2>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeInUp">
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginBottom: 50,
					}}
				>
					<div className="grid-4">
						{BRANDS.map((brand, i) => {
							if (i < 8) {
								return <HoverImg key={i} title={brand} type="brands" />;
							} else {
								if (loadMore) {
									return <HoverImg key={i} title={brand} type="brands" />;
								}
							}
						})}
					</div>
				</div>

				<div style={{ display: "flex", justifyContent: "center" }}>
					<button
						className="btn-load-more"
						onClick={() => setLoadMore(!loadMore)}
					>
						{loadMore
							? t("show_less")
							: `${t("load_more")} (+${BRANDS.length - 8} ${t("more_brands")})`}
					</button>
				</div>
			</ScrollAnimation>

			<style jsx>{`
				h2 {
					margin-bottom: 50px;
				}
			`}</style>
		</section>
	);
};

Brands.getInitialProps = async () => ({
	namespacesRequired: ["brands"],
});

export default withTranslation("brands")(Brands);
