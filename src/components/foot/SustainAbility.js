import React from 'react';

const SustainAbility = () => {
  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold mb-4">Our Commitment to Sustainability</h1>
          <p className="lead">At ShopSpark, we believe in creating a positive impact on our planet while delivering exceptional products to our customers.</p>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="bg-light p-5 rounded-3 text-center">
            <h2 className="fw-bold mb-3">Our Sustainability Promise</h2>
            <p className="mb-4">We're committed to reducing our environmental footprint through responsible sourcing, ethical manufacturing, and sustainable business practices.</p>
            <div className="d-flex justify-content-center gap-4">
              <div className="text-center">
                <div className="bg-success bg-opacity-25 rounded-circle p-3 mb-2 d-inline-block">
                  <i className="bi bi-tree fs-2 text-success"></i>
                </div>
                <p className="fw-bold">Eco-Friendly</p>
              </div>
              <div className="text-center">
                <div className="bg-primary bg-opacity-25 rounded-circle p-3 mb-2 d-inline-block">
                  <i className="bi bi-recycle fs-2 text-primary"></i>
                </div>
                <p className="fw-bold">Recyclable</p>
              </div>
              <div className="text-center">
                <div className="bg-warning bg-opacity-25 rounded-circle p-3 mb-2 d-inline-block">
                  <i className="bi bi-heart fs-2 text-warning"></i>
                </div>
                <p className="fw-bold">Ethical</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="fw-bold mb-4">Our Sustainability Goals</h2>
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                  <i className="bi bi-droplet-half fs-4 text-primary"></i>
                </div>
                <h3 className="card-title h5 fw-bold mb-0">Reduce Water Usage</h3>
              </div>
              <p className="card-text">We aim to reduce water consumption in our manufacturing process by 30% by 2026 through innovative technologies and water recycling systems.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3">
                  <i className="bi bi-lightbulb fs-4 text-success"></i>
                </div>
                <h3 className="card-title h5 fw-bold mb-0">Carbon Neutral</h3>
              </div>
              <p className="card-text">Our goal is to become carbon neutral by 2025 through renewable energy investments, carbon offsets, and optimizing our supply chain efficiency.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-warning bg-opacity-10 p-3 rounded-circle me-3">
                  <i className="bi bi-box-seam fs-4 text-warning"></i>
                </div>
                <h3 className="card-title h5 fw-bold mb-0">Zero Waste Packaging</h3>
              </div>
              <p className="card-text">We're transitioning to 100% recyclable, biodegradable, or reusable packaging materials across all our product lines by the end of 2024.</p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="row mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="fw-bold mb-3">Sustainable Materials</h2>
          <p className="mb-4">We carefully select materials that minimize environmental impact while meeting our high standards for quality and durability.</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-transparent px-0">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Organic Cotton:</strong> Grown without harmful chemicals and requiring less water
            </li>
            <li className="list-group-item bg-transparent px-0">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Recycled Polyester:</strong> Made from post-consumer plastic bottles
            </li>
            <li className="list-group-item bg-transparent px-0">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Bamboo:</strong> Rapidly renewable and requires minimal water and no pesticides
            </li>
            <li className="list-group-item bg-transparent px-0">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Cork:</strong> Harvested without cutting down trees, biodegradable and recyclable
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="bg-light p-4 rounded-3 h-100">
            <h3 className="fw-bold mb-3">Our Impact</h3>
            <div className="mb-3">
              <h4 className="h5 mb-2">Water Saved</h4>
              <div className="progress" style={{ height: "20px" }}>
                <div className="progress-bar bg-info" role="progressbar" style={{ width: "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
              </div>
              <p className="small text-muted mt-2">4.2 million gallons saved in 2023</p>
            </div>
            <div className="mb-3">
              <h4 className="h5 mb-2">CO₂ Reduction</h4>
              <div className="progress" style={{ height: "20px" }}>
                <div className="progress-bar bg-success" role="progressbar" style={{ width: "42%" }} aria-valuenow="42" aria-valuemin="0" aria-valuemax="100">42%</div>
              </div>
              <p className="small text-muted mt-2">23,000 tons of CO₂ offset last year</p>
            </div>
            <div>
              <h4 className="h5 mb-2">Recycled Materials</h4>
              <div className="progress" style={{ height: "20px" }}>
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "78%" }} aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">78%</div>
              </div>
              <p className="small text-muted mt-2">78% of our products contain recycled materials</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-0 bg-light">
            <div className="card-body p-4">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h2 className="fw-bold mb-3">Ethical Manufacturing</h2>
                  <p>We partner only with factories that meet our strict standards for worker welfare, fair wages, and safe working conditions. All of our manufacturing partners are regularly audited and certified by independent organizations.</p>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    <span className="badge bg-secondary">Fair Trade Certified</span>
                    <span className="badge bg-secondary">GOTS Certified</span>
                    <span className="badge bg-secondary">OEKO-TEX Standard 100</span>
                    <span className="badge bg-secondary">B Corp Certified</span>
                  </div>
                </div>
                <div className="col-md-4 mt-3 mt-md-0 text-center">
                  <div className="bg-white p-3 rounded-circle d-inline-block">
                    <i className="bi bi-people-fill text-primary fs-1"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="row mb-5">
        <div className="col-12 mb-4">
          <h2 className="fw-bold">Our Sustainability Programs</h2>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="h5 fw-bold mb-3">Recycle & Reward Program</h3>
              <p>Return your used ShopSpark products for recycling and receive store credit towards your next purchase. We've recycled over 50,000 items through this program.</p>
             
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="h5 fw-bold mb-3">Tree Planting Initiative</h3>
              <p>For every order placed, we plant a tree in areas affected by deforestation. So far, we've planted over 100,000 trees across the globe.</p>
              
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="h5 fw-bold mb-3">Green Energy Investment</h3>
              <p>We invest 5% of our annual profits in renewable energy projects to offset our carbon footprint and support the transition to clean energy.</p>
           
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="h5 fw-bold mb-3">Ocean Plastic Recovery</h3>
              <p>Our partnership with ocean cleanup organizations helps remove plastic waste from oceans and incorporates it into our recycled product lines.</p>
              
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="bg-primary bg-opacity-10 p-5 rounded-3 text-center">
            <h2 className="fw-bold mb-3">Join Our Sustainability Journey</h2>
            <p className="mb-4">Subscribe to our newsletter to receive updates on our sustainability initiatives and get tips on how to live more sustainably.</p>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Your email address" aria-label="Email address" />
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainAbility;