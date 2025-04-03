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
      <div className="d-flex gap-3">
        <button
          onClick={() => handleShare('facebook')}
          className="btn btn-outline-dark d-flex align-items-center gap-2 share-btn"
          aria-label="Share on Facebook"
        >
          <FaFacebook className="share-icon" /> Facebook
        </button>
        <button
          onClick={() => handleShare('twitter')}
          className="btn btn-outline-dark d-flex align-items-center gap-2 share-btn"
          aria-label="Share on Twitter"
        >
          <FaTwitter className="share-icon" /> Twitter
        </button>
        <button
          onClick={() => handleShare('whatsapp')}
          className="btn btn-outline-dark d-flex align-items-center gap-2 share-btn"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp className="share-icon" /> WhatsApp
        </button>
      </div>

      <style jsx global>{`
        .share-btn {
          transition: all 0.3s ease;
        }
        .share-btn:hover {
          background-color: #000;
          color: #fff;
        }
        .share-icon {
          color: #000;
          transition: color 0.3s ease;
        }
        .share-btn:hover .share-icon {
          color: #fff;
        }
      `}</style>
    </div>
  );
} 