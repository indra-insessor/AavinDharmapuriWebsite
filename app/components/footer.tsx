export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h4>Aavin Dharmapuri</h4>
          <p>
            Dharmapuri District Co-operative Milk Producers Union Ltd<br />
            Tamil Nadu, India
          </p>
        </div>

        <div>
          <p>Email: gmaavindharmapuri@gmail.com</p>
          <p>© {new Date().getFullYear()} Aavin Dharmapuri</p>
        </div>
      </div>
    </footer>
  );
}
