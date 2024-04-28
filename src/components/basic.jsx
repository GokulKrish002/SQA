import React from "react";

function header() {
    return (
        <div className="d-flex justify-content-between align-items-center px-5 py-2 border-bottom border-secondary text-white">
            <p className="d-block d-lg-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffffff" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </p>
            <div className="logo">
                <img src="SQA_logo.png" className="object-contain" alt="logo" />
            </div>
            <ul className="justify-content-center align-items-center navlinks d-none d-lg-flex">
                <li><a href="#" className="mr-5"><span className="small_text"><i class="fa-solid fa-pen mr-2"></i> Add Questions</span></a></li>
                <li className="icon_bg position-relative"><a href="#" className="mr-5"><i class="fa-solid fa-users"></i></a></li>
                <li className="icon_bg"><input type="text" className="navbar_search" placeholder="Search SQA" /></li>
                <li className="icon_bg"><a href="#" className="ml-5"><i className="fa-solid fa-house"></i></a></li>
                <li className="icon_bg position-relative"><span className="notification_text">new</span><a href="#" className="ml-5"><i className="fa-solid fa-user"></i></a></li>
                <li className="icon_bg position-relative"><span className="notification_count">69</span> <a href="#" className="ml-5"><i className="fa-solid fa-bell"></i></a></li>
            </ul>
            <p className="d-block d-lg-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffffff" className="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
            </p>
        </div>
    );
}

function post_header() {
    return (
        <div className="d-flex justify-content-between align-items-center my-2 mx-3 border-bottom pb-3">
            <div>
                <p>Gokul Krish <span className="px-2 bg-light text-dark ml-2 small-text">Hello</span></p>
                <p className="user-designation">Web Developer from QBS</p>
            </div>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
            </p>
        </div>
    )
}
function post() {
    return (
        <div className="p-1 bg-dark rounded-lg">
            <div className="d-flex justify-content-between align-items-center my-2 mx-3 border-bottom pb-3">
                <div>
                    <p>Gokul Krish <span className="px-2 bg-light text-dark ml-2 small-text">Hello</span></p>
                    <p className="user-designation">Web Developer from QBS</p>
                </div>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </p>
            </div>
            <div className="d-flex justify-content-start align-items-center pt-2 mb-4 mx-3">
                <p className="content-title">Hey what about web Development in 2024 and how many of you are still using php ?</p>
            </div>
            <div className="post-main-content">
                <p className="px-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis eligendi iusto in optio officia, dolor est sit architecto nesciunt. Dolorem dolore reiciendis temporibus ab cupiditate minima aut ipsam magni necessitatibus, numquam, animi repellendus natus quod commodi. Veniam officiis debitis pariatur eveniet libero maiores eligendi. Molestiae aliquam corporis voluptas assumenda animi, praesentium est suscipit quam modi harum eius obcaecati a, impedit blanditiis cupiditate iste magni voluptate tenetur nostrum sapiente! Laboriosam?</p>
                <div className="post-image my-3 mx-3">
                    <img src="https://picsum.photos/500/500" className="object-cover" alt="" />
                </div>
                <p className="px-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis eligendi iusto in optio officia, dolor est sit architecto nesciunt. Dolorem dolore reiciendis temporibus ab cupiditate minima aut ipsam magni necessitatibus, numquam, animi repellendus natus quod commodi. Veniam officiis debitis pariatur eveniet libero maiores eligendi. Molestiae aliquam corporis voluptas assumenda animi, praesentium est suscipit quam modi harum eius obcaecati a, impedit blanditiis cupiditate iste magni voluptate tenetur nostrum sapiente! Laboriosam?</p>
            </div>
            <div className="border-top mt-3 pt-2 d-flex justify-content-between align-items-center">
                <button className="btn btn-outline-light px-4">Comment</button>
                <div>
                    <button className="btn btn-light">Like</button>
                    <button className="btn btn-light ml-2">Dislike</button>
                </div>  
            </div>
        </div>
    )
}

function login_screen() {
    return (
        <div className="login_container">
            <div className="p-3 bg-secondary">
                <input type="email" placeholder="Email Id here" className="form-control" />
                <input type="password" placeholder="password here" className="form-control my-3" />
                <button className="btn btn-dark">submit</button>
            </div>
        </div>
    )
}

export default { post, header, login_screen };