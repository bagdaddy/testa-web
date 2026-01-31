"use client";

import { SignupForm } from "@testa/forms";
import { SupportWidget } from "@testa/help-center";
import { COMPANY_NAME } from "@testa/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-indigo-600">
            {COMPANY_NAME}
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/features"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Features
            </a>
            <a
              href="/pricing"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Pricing
            </a>
            <a
              href="/docs"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Docs
            </a>
            <a
              href="/help"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Help
            </a>
            <a
              href="/login"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Log in
            </a>
            <a
              href="/signup"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              Start Free
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6">
        <section className="py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 max-w-4xl mx-auto leading-tight">
            Automated QA Testing for{" "}
            <span className="text-indigo-600">Modern Applications</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            {COMPANY_NAME} provides comprehensive automated testing for web and
            mobile apps. Integrate with your CI/CD pipeline and catch bugs before
            they reach production.
          </p>

          <div className="flex flex-col items-center gap-6">
            <SignupForm
              source="native"
              submitLabel="Start Free Trial"
              showCompanyField
              onSuccess={(lead) => {
                console.log("Lead captured:", lead);
                alert("Thanks for signing up! Check your email for next steps.");
              }}
            />
            <p className="text-sm text-gray-500">
              Free 14-day trial. No credit card required.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Everything You Need for QA Automation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Visual Regression Testing"
              description="Automatically detect visual changes in your UI with pixel-perfect comparisons."
              icon="👁️"
            />
            <FeatureCard
              title="API Testing"
              description="Test your REST and GraphQL APIs with automatic contract validation."
              icon="🔗"
            />
            <FeatureCard
              title="CI/CD Integration"
              description="Seamlessly integrate with GitHub Actions, GitLab CI, Jenkins, and more."
              icon="⚡"
            />
            <FeatureCard
              title="Cross-Browser Testing"
              description="Run tests across Chrome, Firefox, Safari, and Edge simultaneously."
              icon="🌐"
            />
            <FeatureCard
              title="Mobile Testing"
              description="Test on real iOS and Android devices with our device cloud."
              icon="📱"
            />
            <FeatureCard
              title="Performance Monitoring"
              description="Track Core Web Vitals and performance metrics over time."
              icon="📊"
            />
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Integrates with Your Stack
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Works with the tools you already use
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {["GitHub", "GitLab", "Jira", "Slack", "Jenkins", "CircleCI"].map(
              (tool) => (
                <div
                  key={tool}
                  className="text-xl font-semibold text-gray-400 dark:text-gray-500"
                >
                  {tool}
                </div>
              )
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="bg-indigo-600/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to automate your QA workflow?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Start testing in minutes with our easy setup and comprehensive
              documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="/docs"
                className="px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold rounded-lg transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-indigo-600 mb-4">
                {COMPANY_NAME}
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Automated QA testing for modern development teams.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Product
              </h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <a href="/features">Features</a>
                </li>
                <li>
                  <a href="/pricing">Pricing</a>
                </li>
                <li>
                  <a href="/changelog">Changelog</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <a href="/docs">Documentation</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/help">Help Center</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/privacy">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm pt-8 border-t border-gray-200 dark:border-gray-800">
            <p>&copy; 2024 {COMPANY_NAME}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Support Widget */}
      <SupportWidget />
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
