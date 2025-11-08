'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate API call (replace with actual EmailJS integration)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', category: 'general', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-corporate-blue dark:text-white mb-6">
        Send Us Your Feedback
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-corporate-lightBlue outline-none transition-all"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-corporate-lightBlue outline-none transition-all"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Category
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-corporate-lightBlue outline-none transition-all"
          >
            <option value="general">General Feedback</option>
            <option value="academic">Academic</option>
            <option value="infrastructure">Infrastructure</option>
            <option value="grievance">Grievance</option>
            <option value="suggestion">Suggestion</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Message
          </label>
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-corporate-lightBlue outline-none transition-all resize-none"
            placeholder="Share your feedback with us..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full py-4 bg-corporate-lightBlue text-white font-semibold rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? (
            'Sending...'
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit Feedback
            </>
          )}
        </button>

        {status === 'success' && (
          <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg text-center font-semibold">
            Thank you! Your feedback has been submitted successfully.
          </div>
        )}
      </div>
    </form>
  );
}
