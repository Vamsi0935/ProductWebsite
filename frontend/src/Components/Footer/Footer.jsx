import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content text-center">
        <p>Offer is limited to one redemption per Square account holder.</p>
        <p>
          Offline payments are processed automatically when you reconnect your
          device to the internet and will be declined if you do not reconnect to
          the internet within 24 hours of taking your <br /> first offline
          payment. By enabling offline payments, you are responsible for any
          expired, declined, or disputed payments accepted while offline. Square
          is unable to provide customer <br /> contact information for payments
          declined while offline. Offline payments are not supported on older
          versions of Square Reader for contactless and chip (1st generation -
          v1 and v2). Click <br /> here for help identifying your contactless
          reader. Learn more about how to enable and use offline payments here.
          <hr />
        </p>
      </div>
      <div className="footer-product">
        <h3>Products</h3>
        <ul>
          <li>Commerce</li>
          <li>Point of sale</li>
          <li>Payments</li>
          <li>Online</li>
          <li>Kiosk</li>
          <li>Invoices</li>
          <li>Customers</li>
          <li>Marketing</li>
          <li>Loyalty</li>
          <li>Customer Directory</li>
        </ul>
      </div>
      <div className="footer-businessType">
        <h3>Business Type</h3>
        <ul>
          <li>Food & Beverage</li>
          <li>Quick Service</li>
          <li>Full Service</li>
          <li>Fast Casual</li>
          <li>Bars & Breweries</li>
          <li>Retail</li>
          <li>Beauty Salon</li>
          <li>Barbershop</li>
          <li>Hair Salon</li>
          <li>Nail Salon</li>
        </ul>
      </div>
      <div className="footer-resources">
        <h3>Resources</h3>
        <ul>
          <li>Pricing</li>
          <li>Why Square?</li>
          <li>Testimonials</li>
          <li>The Bottom Line</li>
          <li>Sales</li>
          <li>Support</li>
          <li>Seller Community</li>
          <li>Developer Platform</li>
          <li>Merchant Services</li>
          <li>Rent Hardware</li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>Contact</h3>
        <ul>
          <li>Customer support: 1 (855) 700-6000</li>
          <li>Sales: 1 (800) 470-1673</li>
        </ul>
      </div>
      <div className="footer-square">
        <h3>Square</h3>
        <ul>
          <li>About</li>
          <li>Press & Media</li>
          <li>Careers</li>
          <li>Referrals</li>
          <li>Partners</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
