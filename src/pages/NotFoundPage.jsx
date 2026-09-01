import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Home, PhoneCall, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-card glass-card glass-card-glow">
          <div className="not-found-icon">
            <ShieldAlert size={48} color="#f43f5e" />
          </div>
          <div className="not-found-code">404</div>
          <h1>Page Not Found</h1>
          <p>
            The safety page you requested might have been moved or does not exist. If you require emergency assistance, trigger the SOS portal immediately.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary btn-lg">
              <Home size={18} />
              <span>Return Home</span>
            </Link>
            <Link to="/emergency" className="btn btn-danger btn-lg">
              <PhoneCall size={18} />
              <span>Emergency SOS</span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .not-found-page {
          min-height: calc(100vh - 250px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 0;
        }
        .not-found-card {
          max-width: 540px;
          margin: 0 auto;
          text-align: center;
          padding: 3rem 2rem;
          border-radius: var(--radius-xl);
        }
        .not-found-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        .not-found-code {
          font-family: var(--font-heading);
          font-size: 4.5rem;
          font-weight: 900;
          line-height: 1;
          color: #f43f5e;
          letter-spacing: -0.05em;
          margin-bottom: 0.5rem;
        }
        .not-found-card h1 {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
        }
        .not-found-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .not-found-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
