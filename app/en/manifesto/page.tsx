export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Manifesto</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          We believe in a Brazil where every citizen has the power to understand 
          and monitor the use of public resources.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">We Believe That:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Transparency is a fundamental right</strong> - Every citizen 
              has the right to know how their taxes are being used.
            </li>
            <li>
              <strong>Technology should democratize, not exclude</strong> - Artificial 
              intelligence should be a tool for social inclusion, not a barrier.
            </li>
            <li>
              <strong>Complexity is the enemy of transparency</strong> - Public data 
              should be presented clearly and accessibly to everyone.
            </li>
            <li>
              <strong>Civic vigilance strengthens democracy</strong> - An informed 
              society is a stronger and more just society.
            </li>
            <li>
              <strong>Cultural identity matters</strong> - Our Brazilian roots and 
              history should be reflected in the technologies we create.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Commitments:</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-1">With Citizens</h3>
              <p>To provide free, accessible, and reliable tools for monitoring public spending.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">With Transparency</h3>
              <p>To be transparent in our own processes, keeping our code open and documented.</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold mb-1">With Ethics</h3>
              <p>To use AI responsibly, always prioritizing the public interest.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold mb-1">With Innovation</h3>
              <p>To continuously seek new ways to make public data more accessible.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold mb-1">With Education</h3>
              <p>To educate and empower citizens to understand and use public information.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Call to Action</h2>
          <p className="mb-4">
            This manifesto is not just words - it's a call to action. We invite:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Citizens:</strong> Use our tools, ask questions, demand transparency.
            </li>
            <li>
              <strong>Developers:</strong> Contribute code, ideas, and improvements.
            </li>
            <li>
              <strong>Journalists:</strong> Use our data to tell important stories.
            </li>
            <li>
              <strong>Educators:</strong> Teach the importance of government transparency.
            </li>
            <li>
              <strong>Public servants:</strong> Work with us to improve access to public data.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Future We Want</h2>
          <p>
            We envision a Brazil where:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Every citizen can easily understand the public budget</li>
            <li>Corruption is detected and prevented in real-time</li>
            <li>Public decisions are based on transparent data</li>
            <li>Technology serves social justice</li>
            <li>Democracy is strengthened by informed participation</li>
          </ul>
        </section>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-12">
          <p className="text-center text-lg font-medium">
            "In the fight for transparency, every line of code is an act of citizenship."
          </p>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
            - Cidadão.AI Team
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}