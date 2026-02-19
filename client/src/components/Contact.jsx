import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  let [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    massage: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          message: formData.massage,
        },
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Pesan Berhasil Dikirim");
          setLoading(false);
        },
        (error) => {
          console.log(error);
          alert("Terjadi Kesalahan");
          setLoading(false);
        },
      );
    console.log("PHONE:", formData.phone);
  };
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <div className="contact-wrapper">
            <label>Name :</label>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
            />
          </div>

          <div className="contact-wrapper">
            <label>Phone Number :</label>
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
            />
          </div>

          <div className="contact-wrapper">
            <label>Message :</label>
            <textarea
              rows="7"
              placeholder="Message"
              name="massage"
              value={formData.massage || ""}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
