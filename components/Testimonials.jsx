import Image from "next/image";
import doveIcon from "@/public/dove-5.svg";
import gitLab from "@/public/gitlab-1.svg";
import motul from "@/public/motul-9.svg";
import netlify from "@/public/netlify.svg";
import kenwood from "@/public/kenwood-logo-1.svg";
import googlePlay from "@/public/googlePlay.svg";
import appStore from "@/public/appStore.svg";

export default function Testimonials() {
  return (
    <section className="flex flex-wrap justify-center gap-20 text-center">
      <div className="flex flex-col justify-center">
        <div className="pb-10">
          <h2>
            Used By Companies From <br />
            <span className="text-red-500 active">All Around The World</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-24 py-10">
          <Image src={doveIcon} width={128} height={128} alt="company logo" />
          <Image src={gitLab} width={128} height={128} alt="company logo" />
          <Image src={motul} width={128} height={128} alt="company logo" />
          <Image src={kenwood} width={128} height={128} alt="company logo" />
          <Image src={netlify} width={128} height={128} alt="company logo" />
        </div>
      </div>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            {" "}
            <div className="flex flex-wrap justify-center gap-24 pt-10">
              <div className="flex justify-center items-center">
                <a className="cursor-pointer">
                  <Image
                    src={googlePlay}
                    width={200}
                    alt="Get it on Google Play"
                  />
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a className="cursor-pointer">
                  <Image
                    src={appStore}
                    width={190}
                    alt="Download on App Store"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
