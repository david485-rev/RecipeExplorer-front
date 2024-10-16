// import {fireEvent, render, screen, within} from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import MyProfileController from "./MyProfileController";
// import { notEqual } from "assert";

// describe('Myprofile page Tests', ()=> {
//     test('My profile text is shown when first entered to page', ()=> {
//         render(
//             <BroswerRouter>
//                 <MyProfileController/>
//             </BroswerRouter>
//         );

//         const element = screen.getByText('My Profile',{selector: h1}, {exact:false});
//         expect(element).toBeInTheDocument();
//     });

//     test('There is link to My profile in nav bar', () => {
//         render(
//             <BroswerRouter>
//                 <MyProfileController/>
//             </BroswerRouter>
//         );
//         const element = screen.getByText('My Profile',{selector: notEqual(h1)}, {exact:false});
//         expect(element).toBeInTheDocument();
//     })
// })