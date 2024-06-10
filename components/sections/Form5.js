import { useState } from "react"


export default function Form5() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="form-section bg_light_1 position-relative">
                <div className="ab_img_left_top">
                    <img src="/assets/images/bg.png" className="img-fluid" alt="img" />
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="container-fluid">
                    <div className="row align-items-end">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="image">
                                <img src="/assets/images/about/man-1.png" className="img-fluid m-auto" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="section_title text-center type_one">
                                <h4 className="sm_title"> Get In Touch</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Get Started your Favorite<br /> Insurance Services </h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                            <section className="fom_tab_box custom_tabs type_one">
                                <ul className="nav nav-tabs links trans justify-content-center" role="tablist">
                                    <li className="nav-item" onClick={() => handleOnClick(1)}>
                                        <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>
                                            Business Insurance
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(2)}>
                                        <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>
                                            Medical Insurance
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(3)}>
                                        <button className={activeIndex === 3 ? "nav-link active" : "nav-link"}>
                                            House Insurance
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(4)}>
                                        <button className={activeIndex === 4 ? "nav-link active" : "nav-link"}>
                                            Car Insurance
                                        </button>
                                    </li>
                                </ul>
                                <div className="s_tabs_content tab-content">
                                    <div className={activeIndex === 1 ? "tab-pane active" : "tab-pane"}>
                                        <div className="contentbox ">
                                            <div className="contact_form_shortcode">
                                                <form method="post" action="#">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <label>Your Full Name <span>*</span></label>
                                                            <input type="text" name="name" placeholder="Larry D. McMahon" required />
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <label>Phone</label>
                                                            <input type="text" name="phone" placeholder="+000 (123) 456 88" />
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <label>Email Address <span className="wpforms-required-label">*</span></label>
                                                            <input type="email" name="email" placeholder="support@gmail.com" required />
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-12">
                                                            <label>Insurance Type</label>
                                                            <select>
                                                                <option value="Business">Business</option>
                                                                <option value="Fire">Fire</option>
                                                                <option value="Car">Car</option>
                                                                <option value="Life">Life</option>
                                                                <option value="House">House</option>
                                                                <option value="Marrige">Marrige</option>
                                                                <option value="Medical">Medical</option>
                                                                <option value="Travel">Travel</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <label>Limite Of Balance</label>
                                                            <input type="range" name="range"  min={0} max={8560} step={1} style={{ width: "100%" }} />
                                                            <div className="slider-hint">Selected Value: <b>4000</b>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-12 text-md-end">
                                                            <button type="submit">Get a Guote</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane active" : "tab-pane"}>
                                        <div className="contentbox ">
                                            <div className="contact_form_shortcode">
                                                <form method="post" action="#">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <label>Your Full Name <span>*</span></label>
                                                            <input type="text" name="name" placeholder="Larry D. McMahon" required />
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <label>Phone</label>
                                                            <input type="text" name="phone" placeholder="+000 (123) 456 88" />
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <label>Email Address <span className="wpforms-required-label">*</span></label>
                                                            <input type="email" name="email" placeholder="support@gmail.com" required />
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-12">
                                                            <label>Insurance Type</label>
                                                            <select>
                                                                <option value="Business">Business</option>
                                                                <option value="Fire">Fire</option>
                                                                <option value="Car">Car</option>
                                                                <option value="Life">Life</option>
                                                                <option value="House">House</option>
                                                                <option value="Marrige">Marrige</option>
                                                                <option value="Medical">Medical</option>
                                                                <option value="Travel">Travel</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <label>Limite Of Balance</label>
                                                            <input type="range" name="range"  min={0} max={8560} step={1} style={{ width: "100%" }} />
                                                            <div className="slider-hint">Selected Value: <b>4000</b>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-12  text-md-end">
                                                            <button type="submit">Get a Guote</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane active" : "tab-pane"}>
                                        <div className="contentbox ">
                                            <div className="contact_form_shortcode">
                                                <form method="post" action="#">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <label>Your Full Name <span>*</span></label>
                                                            <input type="text" name="name" placeholder="Larry D. McMahon" required />
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <label>Phone</label>
                                                            <input type="text" name="phone" placeholder="+000 (123) 456 88" />
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <label>Email Address <span className="wpforms-required-label">*</span></label>
                                                            <input type="email" name="email" placeholder="support@gmail.com" required />
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-12">
                                                            <label>Insurance Type</label>
                                                            <select>
                                                                <option value="Business">Business</option>
                                                                <option value="Fire">Fire</option>
                                                                <option value="Car">Car</option>
                                                                <option value="Life">Life</option>
                                                                <option value="House">House</option>
                                                                <option value="Marrige">Marrige</option>
                                                                <option value="Medical">Medical</option>
                                                                <option value="Travel">Travel</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <label>Limite Of Balance</label>
                                                            <input type="range" name="range"  min={0} max={8560} step={1} style={{ width: "100%" }} />
                                                            <div className="slider-hint">Selected Value: <b>4000</b>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-12  text-md-end">
                                                            <button type="submit">Get a Guote</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 4 ? "tab-pane active" : "tab-pane"}>
                                        <div className="contentbox ">
                                            <div className="contact_form_shortcode">
                                                <form method="post" action="#">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <label>Your Full Name <span>*</span></label>
                                                            <input type="text" name="name" placeholder="Larry D. McMahon" required />
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <label>Phone</label>
                                                            <input type="text" name="phone" placeholder="+000 (123) 456 88" />
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <label>Email Address <span className="wpforms-required-label">*</span></label>
                                                            <input type="email" name="email" placeholder="support@gmail.com" required />
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-12">
                                                            <label>Insurance Type</label>
                                                            <select>
                                                                <option value="Business">Business</option>
                                                                <option value="Fire">Fire</option>
                                                                <option value="Car">Car</option>
                                                                <option value="Life">Life</option>
                                                                <option value="House">House</option>
                                                                <option value="Marrige">Marrige</option>
                                                                <option value="Medical">Medical</option>
                                                                <option value="Travel">Travel</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <label>Limite Of Balance</label>
                                                            <input type="range" name="range"  min={0} max={8560} step={1} style={{ width: "100%" }} />
                                                            <div className="slider-hint">Selected Value: <b>4000</b>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-12  text-md-end">
                                                            <button type="submit">Get a Guote</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_90" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="image">
                                <img src="/assets/images/about/man-2.png" className="img-fluid m-auto" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
