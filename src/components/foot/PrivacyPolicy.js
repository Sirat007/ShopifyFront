import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ShieldLockFill, BookFill, ExclamationTriangleFill, CheckCircleFill, EyeFill, TrashFill, XOctagonFill } from 'react-bootstrap-icons';

function PrivacyPolicy() {
  const containerStyle = {
    backgroundColor: '#f8f9fa',
    paddingTop: '60px',
    paddingBottom: '60px',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
    padding: '40px',
    borderLeft: '0.25rem solid #007bff', // Highlight border
  };

  const headingStyle = {
    color: '#007bff',
    fontWeight: 'bold',
    marginBottom: '30px',
  };

  const sectionHeadingStyle = {
    color: '#343a40',
    fontWeight: 'bold',
    marginBottom: '20px',
    marginTop: '30px',
  };

  const paragraphStyle = {
    color: '#495057',
    lineHeight: '1.7',
    marginBottom: '15px',
  };

  const listStyle = {
    listStyleType: 'none',
    paddingLeft: '0',
  };

  const listItemStyle = {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    marginRight: '10px',
    color: '#007bff',
  };

  const mutedStyle = {
    color: '#6c757d',
    fontSize: '0.9rem',
    marginTop: '30px',
  };

  return (
    <div style={containerStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div style={cardStyle}>
              <h1 style={headingStyle}>Privacy Policy</h1>

              <p style={paragraphStyle}>
                <BookFill size={20} style={{ ...iconStyle, color: '#6c757d' }} className="me-2" />
                Your privacy is important to us. This Privacy Policy explains how ShopSpark collects, uses, and protects your personal information.
              </p>

              <section>
                <h2 style={sectionHeadingStyle}>
                  <ShieldLockFill size={24} style={{ ...iconStyle, color: '#28a745' }} className="me-2" />
                  Information We Collect
                </h2>
                <p style={paragraphStyle}>We may collect the following types of personal information:</p>
                <ul style={listStyle}>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={{ ...iconStyle, color: '#17a2b8' }} className="me-2" /> Contact Information: Name, email, phone, address.</li>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={{ ...iconStyle, color: '#ffc107' }} className="me-2" /> Account Information: Username, order history, preferences.</li>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={{ ...iconStyle, color: '#28a745' }} className="me-2" /> Payment Information: Credit card details (processed securely).</li>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={iconStyle} className="me-2" /> Device and Usage Information: IP address, browser type, etc.</li>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={{ ...iconStyle, color: '#6c757d' }} className="me-2" /> Communication Data: Records of your communications.</li>
                </ul>
              </section>

              <section>
                <h2 style={sectionHeadingStyle}>
                  <ExclamationTriangleFill size={24} style={{ ...iconStyle, color: '#dc3545' }} className="me-2" />
                  How We Use Your Information
                </h2>
                <p style={paragraphStyle}>We may use your personal information for the following purposes:</p>
                <ul style={listStyle}>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={{ ...iconStyle, color: '#17a2b8' }} className="me-2" /> To process and fulfill your orders.</li>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={{ ...iconStyle, color: '#ffc107' }} className="me-2" /> To manage your account and provide customer support.</li>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={iconStyle} className="me-2" /> To personalize your experience.</li>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={{ ...iconStyle, color: '#28a745' }} className="me-2" /> To send you order confirmations and updates.</li>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={{ ...iconStyle, color: '#6c757d' }} className="me-2" /> With your consent, to send promotional emails.</li>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={iconStyle} className="me-2" /> To improve our website and services.</li>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={{ ...iconStyle, color: '#dc3545' }} className="me-2" /> To detect and prevent fraud.</li>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={{ ...iconStyle, color: '#343a40' }} className="me-2" /> To comply with legal obligations.</li>
                </ul>
              </section>

              <section>
                <h2 style={sectionHeadingStyle}>Sharing Your Information</h2>
                <p style={paragraphStyle}>We may share your personal information with the following:</p>
                <ul style={listStyle}>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={{ ...iconStyle, color: '#17a2b8' }} className="me-2" /> Service Providers (e.g., payment, shipping, marketing).</li>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={{ ...iconStyle, color: '#28a745' }} className="me-2" /> Business Partners (with your consent).</li>
                  <li style={listItemStyle}><CheckCircleFill size={18} style={{ ...iconStyle, color: '#dc3545' }} className="me-2" /> Legal Authorities (if required).</li>
                </ul>
              </section>

              <section>
                <h2 style={sectionHeadingStyle}>Your Rights and Choices</h2>
                <p style={paragraphStyle}>You have the following rights:</p>
                <ul style={listStyle}>
                  <li style={listItemStyle}><EyeFill size={18} style={{ ...iconStyle, color: '#007bff' }} className="me-2" /> Access your personal information.</li>
                
                  <li style={listItemStyle}><TrashFill size={18} style={{ ...iconStyle, color: '#dc3545' }} className="me-2" /> Request deletion (with exceptions).</li>
                  <li style={listItemStyle}><XOctagonFill size={18} style={{ ...iconStyle, color: '#ffc107' }} className="me-2" /> Opt-out of promotional emails.</li>
                </ul>
              </section>

              <section>
                <h2 style={sectionHeadingStyle}>Data Security</h2>
                <p style={paragraphStyle}>We take reasonable measures to protect your data, including encryption and secure servers.</p>
              </section>

              <section>
                <h2 style={sectionHeadingStyle}>Third-Party Links</h2>
                <p style={paragraphStyle}>We are not responsible for the privacy practices of linked third-party websites.</p>
              </section>

              <section>
                <h2 style={sectionHeadingStyle}>Changes to This Privacy Policy</h2>
                <p style={paragraphStyle}>We may update this policy periodically. Changes will be posted on this page.</p>
              </section>

              <p style={mutedStyle}>Last Updated: 2025</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PrivacyPolicy;