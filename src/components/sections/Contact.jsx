import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required.';
    if (!form.subject.trim()) e.subject = 'Subject is required.';
    if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters.';
    return e;
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Simulate send
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  const contactLinks = [
    { icon: <Mail size={22} />, label: 'Email', value: 'sriramojumadhan12@gmail.com', href: 'mailto:sriramojumadhan12@gmail.com', color: 'text-neon-blue' },
    { icon: <Linkedin size={22} />, label: 'LinkedIn', value: 'linkedin.com/in/portifystudio', href: 'https://www.linkedin.com/company/portifystudio', color: 'text-primary-purple-light' },
    { icon: <Github size={22} />, label: 'GitHub', value: 'github.com/portifystudio', href: 'https://github.com/portifystudio', color: 'text-accent-pink' },
    { icon: <MapPin size={22} />, label: 'Location', value: 'India', href: '#', color: 'text-emerald-400' },
  ];

  const Field = ({ name, label, type = 'text', rows }) => (
    <div>
      <label className="block text-sm font-bold mb-2 text-text-dark-muted uppercase tracking-widest">{label}</label>
      {rows ? (
        <textarea
          name={name}
          rows={rows}
          value={form[name]}
          onChange={handleChange}
          className={`w-full bg-white/5 border rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-neon-blue transition-colors resize-none ${errors[name] ? 'border-red-500' : 'border-white/10'}`}
          placeholder={`Enter your ${label.toLowerCase()}...`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={form[name]}
          onChange={handleChange}
          className={`w-full bg-white/5 border rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-neon-blue transition-colors ${errors[name] ? 'border-red-500' : 'border-white/10'}`}
          placeholder={`Enter your ${label.toLowerCase()}...`}
        />
      )}
      {errors[name] && (
        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
          <AlertCircle size={12} /> {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/5">
      {/* Glows */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary-purple/10 blur-[100px] -z-10 rounded-full"></div>
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-neon-blue/10 blur-[80px] -z-10 rounded-full"></div>

      <div className="container">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-neon-blue">Touch.</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-purple to-neon-blue rounded-full"></div>
          <p className="mt-6 text-text-dark-muted max-w-md text-center">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-2xl font-bold mb-2">Let's Build Something Great</h3>
              <p className="text-text-dark-muted text-sm leading-relaxed">
                I'm currently open to freelance projects, full-time roles, and exciting collaborations.
                Whether you have a question or just want to chat — feel free to reach out!
              </p>

              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group hover:translate-x-2 transition-all"
                >
                  <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors ${link.color}`}>
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-dark-muted font-bold">{link.label}</p>
                    <p className="text-sm font-medium">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Hire Me CTA */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/sriramojumadhan-ops/Portfolio/blob/main/assets/Resume_for_placement%20(1)%20(1).pdf"
              target="_blank"
              className="flex items-center justify-center gap-3 w-full p-5 bg-gradient-to-r from-primary-purple via-primary-purple-light to-neon-blue rounded-2xl text-white font-bold text-lg shadow-[0_10px_30px_rgba(109,40,217,0.3)] hover:shadow-[0_10px_40px_rgba(14,165,233,0.4)] transition-all"
            >
              📄 Download Resume
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-3xl border border-white/5 space-y-5"
            noValidate
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1"><Field name="name" label="Name" /></div>
              <div className="col-span-2 sm:col-span-1"><Field name="email" label="Email" type="email" /></div>
            </div>
            <Field name="subject" label="Subject" />
            <Field name="message" label="Message" rows={5} />

            {status === 'success' && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                <CheckCircle size={16} /> Message sent! I'll be in touch soon.
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-primary-purple to-neon-blue rounded-xl text-white font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(109,40,217,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] transition-all"
            >
              Send Message <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
