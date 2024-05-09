import QAStyle from "./style";
import devicesJpg from "../../Images/devices.jpg"
import { SettingOutlined } from '@ant-design/icons';
import { Col, Collapse, Row, Select } from 'antd';


export default function QA() {
    const { Panel } = Collapse;
    return(
        <QAStyle>
            <div className="wrapper">
                <Row>
                    <Col span={24}>
                        <svg className="tv" width="157" height="80" viewBox="0 0 157 80" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd">
                            <path d="M43.874 12.7c2.733-3.418 4.588-8.008 4.1-12.7-4 .2-8.883 2.64-11.7 6.06-2.538 2.93-4.784 7.712-4.2 12.205 4.492.4 8.978-2.244 11.8-5.567m4.046 6.446c-6.522-.388-12.068 3.702-15.183 3.702s-7.885-3.506-13.045-3.4c-6.714.098-12.944 3.895-16.35 9.933-7.008 12.08-1.85 29.996 4.965 39.834 3.3 4.867 7.3 10.225 12.554 10.033 4.966-.195 6.912-3.215 12.948-3.215s7.785 3.215 13.04 3.118c5.45-.098 8.86-4.87 12.17-9.74 3.797-5.55 5.35-10.906 5.448-11.2-.097-.097-10.5-4.092-10.608-16.07-.098-10.03 8.176-14.8 8.566-15.096-4.672-6.9-11.973-7.7-14.504-7.886m41.54-9.234v13.23h10.637v8.732H89.46V63c0 4.815 2.117 7.038 6.773 7.038a35.56 35.56 0 003.811-.265v8.784c-1.27.265-3.8.477-6.298.477-11.007 0-15.293-4.234-15.293-14.923V31.874h-8.15v-8.732h8.15V9.913H89.46zM137.323 78.6h-11.68l-19.645-55.44h11.628l13.778 44.552h.265l13.78-44.552h11.415z"></path>
                        </svg>
                        <h2>Watch here and on the big screen.</h2>
                        <p>Find Apple TV+ on the TV app, available on your Apple devices, smart TVs, web and more.</p>
                        <div className="logo">
                        <svg className="tv4k" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.12 80.17" role="img" title="Apple&nbsp;TV&nbsp;4K"><path d="M89.459 9.847v13.23h10.636v8.73H89.46v31.117c0 4.815 2.117 7.038 6.773 7.038 1.164 0 3.068-.159 3.81-.265v8.784c-1.27.265-3.81.477-6.297.477-11.007 0-15.293-4.234-15.293-14.923V31.808h-8.15v-8.732h8.15V9.846h11.007zM137.323 78.525h-11.68l-19.645-55.44h11.627l13.779 44.552h.264l13.779-44.553h11.416l-19.54 55.44zM255.56 23.08l-18.48 24.194h-.347V23.08h-13.29v55.512h13.29V67.25l6.115-7.871L255.1 78.592h17.023l-20.167-30.856L271.05 23.08zM180.377 58.023l13.792-22.772h.267v23.158h-14.06v-.386zm7.235-34.943l-20.897 34.506v12.157h27.714v8.85h13.314v-8.85h8.532V58.41h-8.532V23.08h-20.131zM47.896 19.129c-6.518-.482-12.048 3.64-15.133 3.64-3.13 0-7.957-3.536-13.074-3.44-6.72.099-12.912 3.91-16.377 9.927C-3.667 41.369 1.53 59.32 8.328 69.15c3.326 4.803 7.292 10.216 12.5 10.019 5.015-.198 6.912-3.244 12.973-3.244 6.057 0 7.766 3.244 13.068 3.147 5.397-.1 8.816-4.903 12.117-9.733 3.82-5.575 5.39-10.973 5.483-11.259-.12-.045-10.52-4.036-10.624-16.018-.094-10.019 8.177-14.835 8.553-15.066-4.695-6.915-11.947-7.678-14.502-7.867zM43.874 12.64C46.642 9.294 48.505 4.634 47.992 0c-3.984.158-8.803 2.654-11.66 5.998-2.56 2.962-4.808 7.705-4.197 12.245 4.44.343 8.973-2.255 11.74-5.603z"></path></svg>
                            <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_samsung__er6s8sp9t126_large.jpg" />
                            <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_lg__7fxn3l0zf5ua_large.jpg" />
                            <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_vizio__crgnno5ezt2e_large.jpg" />
                            <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_sony__dv28xq4n91ea_large.jpg" />
                            <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_xfinity__fohor3dbqrmi_large.jpg" />
                            <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_roku__d3kr4gpcimoi_large.jpg" />
                            <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_firetv__f6qpefrj0ree_large.jpg" />
                            <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_google_tv__e5t4asdc2gsy_large.jpg" />
                            <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_playstation__djtq2b40wf2a_large.jpg" />
                            <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_xbox__cfelmbxxfoaa_large.jpg" />
                        </div>
                        <h3>Watch on the go.</h3>
                        <a href="#">
                            <span>See all the ways to watch Apple TV+</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="7.5" viewBox="0 0 320 512"><path fill="#0a84ff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                        </a>
                        <div className="devices">
                            <img src={devicesJpg} />
                        </div>
                        <h2 className="title">Questions? Answers.</h2>
                        <Collapse className="collapse" expandIconPosition="end" ghost="false">
                            <Panel className="panel" header="What is Apple TV+?" key="1" >
                                <p>Apple TV+ is a streaming service from Apple. It features exclusive Apple Original shows and movies from some of the industry’s top talent, with new premieres arriving each month.  Browse all of the available content on Apple TV+ inside the Apple TV app on the “Apple TV+” tab or here on <a href="#" className="blue">tv.apple.com</a>.</p>
                            </Panel>
                            <Panel className="panel" header="How much does Apple TV+ cost?" key="2">
                                <p>Pricing might vary depending on the offer you choose. (1) If you buy an Apple device, Apple TV+ is included free for three months. (2) A monthly subscription is just $12.99 per month after a free seven-day trial. (3) Apple TV+ is included in <a href="#" className="blue">Apple One</a>, which bundles up to five other Apple services into a single monthly subscription. (4) The Apple Music Student Plan comes with a free subscription to Apple TV+.</p>
                            </Panel>
                            <Panel className="panel" header="Can I get Apple TV+ for free?" key="3">
                                <p>There are a few ways to try Apple TV+ for free. First, try 7 days of Apple TV+ for free by starting a trial in the Apple TV app on your iPhone, iPad, Apple TV 4K or HD, or on any streaming device. If you’ve recently purchased Apple hardware that includes a 12-month, 6-month, 3-month or other complimentary free trial of Apple TV+, this offer will automatically appear in the Apple TV app when signed in with the Apple ID associated with your recent hardware purchase.</p>
                            </Panel>
                            <Panel className="panel" header="Where can I watch Apple TV+?" key="4" >
                                <p>Apple TV+ is an exclusive streaming subscription available in the Apple TV app. You can find Apple TV app on many of your favourite Apple devices. Plus, find the app on <a href="#" className="blue">many smart TVs, streaming devices, game consoles and some selected cable boxes</a></p>
                            </Panel>
                            <Panel className="panel" header="What shows and movies can I watch on Apple TV+?" key="5" >
                                <p>With Apple TV+, you can watch Apple Original shows and movies made exclusively for Apple. New releases are added each month that you can browse in the Apple TV app or on <a href="#" className="blue">tv.apple.com</a>. You’ll find hits like the Emmy-winning show Ted Lasso, critically-acclaimed series The Morning Show and dark comedy Bad Sisters. Apple TV+ also has popular shows like Severance, Slow Horses, and For All Mankind, as well as films like Academy Award–winner for Best Picture CODA and hits like Greyhound, Swan Song, Wolfwalkers and more.</p>
                            </Panel>
                            <Panel className="panel" header="Can I share Apple TV+ with my family?" key="6" >
                                <p>Yes. Apple TV+ lets you share your subscription with up to five family members.</p>
                            </Panel>
                        </Collapse>

                    </Col>
                </Row>
            </div>
        </QAStyle>
    );
}