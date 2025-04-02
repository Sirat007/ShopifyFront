import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BookFill, CheckCircleFill, ExclamationTriangleFill } from 'react-bootstrap-icons';

function TermsofService() {
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
    borderLeft: '0.25rem solid #28a745', 
  };

  const headingStyle = {
    color: '#28a745',
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
    alignItems: 'flex-start',
  };

  const iconStyle = {
    marginRight: '10px',
    color: '#28a745',
    marginTop: '4px',
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
              <h1 style={headingStyle}>Terms of Service</h1>

              <p style={paragraphStyle}>
                <BookFill size={20} style={{ ...iconStyle, color: '#6c757d' }} className="me-2" />
                Please read these Terms of Service carefully before using the ShopSpark website and services. By accessing or using our services, you agree to be bound by these terms.
              </p>

              <section>
                <h2 style={sectionHeadingStyle}>
                  <CheckCircleFill size={24} style={iconStyle} className="me-2" />
                  Acceptance of Terms
                </h2>
                <p style={paragraphStyle}>
                  These Terms of Service constitute a legally binding agreement between you and ShopSpark. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
                </p>
              </section>

              <section>
                <h2 style={sectionHeadingStyle}>
                  <ExclamationTriangleFill size={24} style={{ ...iconStyle, color: '#dc3545' }} className="me-2" />
                  Use of the Service
                </h2>
                <p style={paragraphStyle}>
                  The Service is provided for your personal and non-commercial use only. You agree to use the Service in accordance with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your account and password.
                </p>
                <ul style={listStyle}>
                  <li style={listItemStyle}>
                    <CheckCircleFill size={18} style={iconStyle} className="me-2" />
                    You agree not to use the Service for any unlawful purpose.
                  </li>
                  <li style={listItemStyle}>
                    <CheckCircleFill size={18} style={iconStyle} className="me-2" />
                    You agree not to interfere with or disrupt the operation of the Service.
                  </li>
                  <li style={listItemStyle}>
                    <CheckCircleFill size={18} style={iconStyle} className="me-2" />
                    You are responsible for all content you submit or post on the Service.
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={sectionHeadingStyle}>Intellectual Property</h2>
                <p style={paragraphStyle}>
                  The Service and its original content, features, and functionality are and will remain the exclusive property of ShopSpark and its licensors. The Service is protected by copyright, trademark, and other laws.
                </p>
              </section>

              <section>
                <h2 style={sectionHeadingStyle}>User Content</h2>
                <p style={paragraphStyle}>
                  By posting, uploading, or otherwise making available any content on the Service, you grant ShopSpark a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, and sublicensable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such content.
                </p>
              </section>

              <section>
                <h2 style={sectionHeadingStyle}>Disclaimer of Warranties</h2>
                <p style={paragraphStyle}>
                  THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. SHOP SPARK MAKES NO WARRANTIES, EXPRESSED OR IMPLIED, REGARDING THE SERVICE, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </section>

              <section>
                <h2 style={sectionHeadingStyle}>Limitation of Liability</h2>
                <p style={paragraphStyle}>
                  IN NO EVENT SHALL SHOP SPARK BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF OR INABILITY TO USE THE SERVICE.
                </p>
              </section>

              <section>
                <h2 style={sectionHeadingStyle}>Termination</h2>
                <p style={paragraphStyle}>
                  ShopSpark may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                </p>
              </section>

              <section>
                <h2 style={sectionHeadingStyle}>Governing Law</h2>
                <p style={paragraphStyle}>
                  These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 style={sectionHeadingStyle}>Changes to These Terms</h2>
                <p style={paragraphStyle}>
                  ShopSpark reserves the right to modify or revise these Terms at any time. By continuing to access or use the Service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </section>

              <p style={mutedStyle}>Last Updated: [Date]</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TermsofService;