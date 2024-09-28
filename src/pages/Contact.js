import React from 'react';
import './Contact.css'; // 这里我们为 Contact 组件单独创建一个 CSS 文件

function Contact() {
  return (
    <footer className="contact-footer">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Feel free to reach out to me through any of the following platforms:</p>
        <ul>
          <li>Email: <a href="mailto:lantingh@andrew.cmu.edu">lantingh@andrew.cmu.edu</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/lara-hou-50618a26a/" target="_blank" rel="noreferrer">Lanting Hou on LinkedIn</a></li>
          <li>GitHub: <a href="https://github.com/Lantinghh" target="_blank" rel="noreferrer">Lanting Hou on GitHub</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Contact;
