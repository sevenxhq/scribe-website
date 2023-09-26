"use client";

export default function Footer() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto py-8 text-white xl:py-20">
        <div className="mx-4 grid grid-cols-2 items-center gap-20">
          <div>
            <h3 className="heading">Scribe</h3>
            <h5>&copy; Bridge Connectivity Solutions Pvt. Ltd.</h5>
          </div>
          <ul className="gap-5 xl:flex">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="https://docs.scribe.bible/docs/">Docs</a>
            </li>
            <li>
              <a href="#">Success Stories</a>
            </li>
            <li>
              <a href="#">Try It</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
