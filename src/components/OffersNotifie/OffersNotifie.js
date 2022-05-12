import React, { useState, useEffect }  from "react";
import './OffersNotifie.css';
import { images } from '../../constants';


const OffersNotifie = () => {

    const initialValues = { email: "",};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };

useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        setIsSent(true)
    } else {
        setIsSent(false)
    }
}, [formErrors])


    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
          if (!values.email) {
            errors.email = "E-Mail ist erforderlich!";
          } else if (!regex.test(values.email)) {
            errors.email = "Dies ist kein gültiges E-Mail-Format!";
          }
          return errors;
        };

return (
    <div className='OffersNotifie'>
        <div className="Rectangle-7"> </div>
        <img className="pattern7" src={images.pattern7} alt="" />
        <div className="screen-6 container">
            <img className="logo2" src={images.logo1} alt="" />
            <h3>
            Lassen Sie sich über neue tolle Angebote informieren
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Est, adipiscing 
            cursus auctor eget sed phasellus senectus. 
            </p>
            <form className="inputBox" id="form" action="#" onSubmit={handleSubmit}>
                <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
                />
                <button className="arrowBtn">
                    <img  src={images.arrowBtn} alt="" />
                </button>
            </form>
            <div className="ErrorMsg">{formErrors.email}</div>
            {isSent && <div className="SuccessMsg">E-Mail wurde erfolgreich versendet</div>}
            <ul className="FAQS">
                <li>FAQs</li>
                <li>AGBs</li>
                <li>Impressum</li>
                <li>Jobs</li>
            </ul>
            <div className="socialMeadiaIco">
            <img className="Facebook" src={images.Facebook} alt="" />
            <img className="Twitter" src={images.Twitter} alt="" />
            <img className="Linkedin" src={images.Linkedin} alt="" />
            </div>
        </div>
    </div>
);
}
export default OffersNotifie;
