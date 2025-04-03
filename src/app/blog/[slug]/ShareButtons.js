'use client';

import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function ShareButtons({ url, title }) {
  const handleShare = (platform) => {
    let shareUrl;
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="share-buttons mb-4">
      <h5 className="mb-3">Bagikan Artikel:</h5>
      <div className="d-flex gap-2 flex-wrap">
        <button
          onClick={() => handleShare('facebook')}
          className="btn btn-outline-dark d-flex align-items-center gap-1 share-btn"
          aria-label="Share on Facebook"
        >
          <FaFacebook className="share-icon" />
          <span className="d-none d-sm-inline">Facebook</span>
        </button>
        <button
          onClick={() => handleShare('twitter')}
          className="btn btn-outline-dark d-flex align-items-center gap-1 share-btn"
          aria-label="Share on Twitter"
        >
          <FaTwitter className="share-icon" />
          <span className="d-none d-sm-inline">Twitter</span>
        </button>
        <button
          onClick={() => handleShare('whatsapp')}
          className="btn btn-outline-dark d-flex align-items-center gap-1 share-btn"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp className="share-icon" />
          <span className="d-none d-sm-inline">WhatsApp</span>
        </button>
      </div>

      <style jsx global>{`
        .share-btn {
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
        }
        .share-btn:hover {
          background-color: #000;
          color: #fff;
        }
        .share-icon {
          color: #000;
          transition: color 0.3s ease;
          font-size: 1.2rem;
        }
        .share-btn:hover .share-icon {
          color: #fff;
        }
        @media (max-width: 576px) {
          .share-btn {
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
} 