import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-area bg-[#538e53] py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
         
        <div>
            <h4 className="font-semibold text-white text-lg mb-3">Need Our Support?</h4>
            <ul className="space-y-3 text-white">
              <li className="flex items-start">
               
                
                  Help center
                
              </li>
              <li className="flex items-start">
               
               FAGs
              </li>
              <li className="flex items-start">
               
               Contact Admin
              </li>
              <li className="flex items-start">
               Hotline
              </li>
              <li className="flex items-start">
               
               Report someone
              </li>
              <li className="flex items-start">
               
               How to purchase an item
              </li>
              <li className="flex items-start">
               
               How to sell on Agritech
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-lg mb-3">Need Our Support?</h4>
            <ul className="space-y-3 text-white">
              <li className="flex items-start">
               
                
                  Help center
                
              </li>
              <li className="flex items-start">
               
               FAGs
              </li>
              <li className="flex items-start">
               
               Contact Admin
              </li>
              <li className="flex items-start">
               Hotline
              </li>
              <li className="flex items-start">
               
               Report someone
              </li>
            
            </ul>
          </div>


          {/* About Section */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-3">About Agritech</h4>
            <ul className="space-y-3 text-white">
              <li className="flex items-start">
               
                Privacy policy
              </li>
              <li className="flex items-start">
               
               Terms and conditions
              </li>
              <li className="flex items-start">
               
               Our location
              </li>
              <li className="flex items-start">
               Cookies
              </li>
             
            </ul>
          </div>

         
          {/* Newsletter Section */}
          <div>
            
            <p className="text-white mb-4">Follow us on</p>
            <form className="flex space-x-2">
              
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

