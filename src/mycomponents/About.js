import React from 'react';

export default function About() {
  const heroSection = {
    backgroundImage: `url('https://wallpapers.com/images/hd/4k-laptop-blogger-s-flat-lay-9i6jfzljvhcs8f6y.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh', // smaller height
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const overlayBox = {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    padding: '25px',
    borderRadius: '10px',
    maxWidth: '600px',
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <section style={heroSection}>
        <div style={overlayBox}>
          <h2 className="fw-bold mb-2" style={{ fontSize: '1.8rem' }}>
            What is <span style={{ color: '#e44d26' }}>TodoFlow</span>?
          </h2>
          <p style={{ margin: 0, fontSize: '1rem' }}>
            Your friendly task manager to stay productive every day.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="container py-4">
        <h4 className="text-center fw-bold mb-3">Why you'll love it ❤️</h4>
        <div className="row text-center">
          {[
            { icon: '📝', title: 'Easy to Use', desc: 'Manage tasks easily.' },
            { icon: '⚡', title: 'Fast', desc: 'Built with modern tech.' },
            { icon: '📲', title: 'Responsive', desc: 'Looks great on all devices.' },
            { icon: '🔒', title: 'Secure', desc: 'Your data is safe.' },
          ].map((item, i) => (
            <div className="col-6 col-md-3 mb-3" key={i}>
              <div className="p-3 shadow-sm bg-light rounded h-100">
                <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                <h6 className="mt-2 mb-1">{item.title}</h6>
                <p style={{ fontSize: '0.85rem', color: '#555' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer message */}
      <div className="text-center mb-2">
        <p className="text-muted small">Made with 💙 by you — for your future self.</p>
      </div>
    </div>
  );
}
