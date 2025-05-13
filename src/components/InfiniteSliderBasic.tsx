import { InfiniteSlider } from "./ui/infinite-slider";
import { ProgressiveBlur } from "./ui/progressive-blur.tsx";

import dspecLogo from "../assets/logo-dspec.png";
import eyobLogo from "../assets/logo-eyob.jpg";
import gkuLogo from "../assets/logo-gku.png";
import pxLogo from "../assets/logo-px.png";
import rwmLogo from "../assets/logo-rwm.png";
import sonicLogo from "../assets/logo-sonicsight.png";
import wlLogo from "../assets/logo-wl.png";
import ytLogo from "../assets/logo-yt.png";
import dwLogo from "../assets/logo-digiware.png";
import pvLogo from "../assets/logo-provender.png";
import abLogo from "../assets/logo-abel.png";
import amLogo from "../assets/logo-amora.png";

import blLogo from "../assets/logo-bloom.png";
import deLogo from "../assets/logo-dee.png";
import bkLogo from "../assets/logo-bk.png";
import auLogo from "../assets/logo-au.jpg";
import emLogo from "../assets/logo-em.jpg";

export function InfiniteSliderBasic() {
	return (
		<div>
			<InfiniteSlider gap={30} speed={70} className="">
				<img
					src={amLogo.src}
					alt="AM logo"
					className="w-64 object-contain rounded-box rounded-2xl"
				/>
				<img
					src={pxLogo.src}
					alt="PX logo"
					className="w-64 object-contain rounded-box rounded-2xl"
				/>

				<img
					src={rwmLogo.src}
					alt="logo"
					className="w-64 object-contain rounded-2xl rounded-box"
				/>

				<img
					src={wlLogo.src}
					alt="logo"
					className="w-64 object-contain rounded-2xl rounded-box"
				/>

				<img
					src={eyobLogo.src}
					alt="logo"
					className="w-64 object-contain rounded-2xl rounded-box"
				/>
				<img
					src={dspecLogo.src}
					alt="logo"
					className="w-64 object-contain rounded-2xl rounded-box"
				/>
				<img
					src={gkuLogo.src}
					alt="logo"
					className="w-64 object-contain rounded-2xl rounded-box"
				/>
				<img
					src={sonicLogo.src}
					alt="logo"
					className="w-64 object-contain rounded-2xl rounded-box "
				/>
				<img
					src={ytLogo.src}
					alt="logo"
					className="w-64 object-contain rounded-2xl rounded-box invert"
				/>
				<img
					src={abLogo.src}
					alt="AB logo"
					className="w-64 object-contain rounded-box rounded-2xl"
				/>
				<img
					src={dwLogo.src}
					alt="logo"
					className="w-64 object-contain rounded-2xl rounded-box invert grayscale-100"
				/>
				<img
					src={pvLogo.src}
					alt="logo"
					className="w-64 object-contain rounded-box rounded-2xl grayscale invert"
				/>

				<img
					src={blLogo.src}
					alt="logo"
					className="w-64 object-contain rounded-box rounded-2xl"
				/>

				<img
					src={deLogo.src}
					alt="logo"
					className="w-64 object-contain rounded-box rounded-2xl"
				/>
				<img
					src={bkLogo.src}
					alt="logo"
					className="w-64 object-contain rounded-box rounded-2xl"
				/>
				<img
					src={auLogo.src}
					alt="logo"
					className="w-64 object-contain rounded-box rounded-2xl"
				/>
				<img
					src={emLogo.src}
					alt="logo"
					className="w-64 object-contain rounded-box rounded-2xl"
				/>
			</InfiniteSlider>
			<ProgressiveBlur
				className="pointer-events-none absolute top-0 left-0 h-full w-[200px]"
				direction="left"
				blurIntensity={1}
			/>
			<ProgressiveBlur
				className="pointer-events-none absolute top-0 right-0 h-full w-[200px]"
				direction="right"
				blurIntensity={1}
			/>
		</div>
	);
}
