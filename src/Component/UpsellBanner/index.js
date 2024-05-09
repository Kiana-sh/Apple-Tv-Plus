import UpsellBannerStyle from "./style";

export default function UpsellBanner() {
    return(
        <UpsellBannerStyle>
            <div className="banner">
                <div className="details">
                    <div className="title">All Apple Originals. Only on Apple TV+.</div>
                    <div className="info">Start watching with 7 days free. Or 3 months free when you buy an eligible Apple device.
                        <a href="#">See offer details.</a>
                    </div>
                </div>
                <div className="free-trial">
                    <button>Accept Free Trial</button>
                    <div className="button-exp">7 days free, then $12.99/month. </div>
                    <div className="button-exp">Terms apply.</div>
                </div>
            </div>
        </UpsellBannerStyle>
    );
}