import React from 'react';
import Card from 'react-bootstrap/Card';


const Blogs = () => {
    return (
        <div className='container text-center'>
            <h2 className='text-danger py-4'>Blogs</h2>
            <div>
                <div>
                    <Card className='border-0'>
                        <Card.Body>
                            <Card.Title><h3>Difference between authorization and authentication</h3></Card.Title>
                            <Card.Text>
                                <p><span className='fw-bold'>Answer:</span>অথরাইজেশন  হল মুলত অনুমতি পত্র । একটি সিস্টেমের মধ্যে একজনকে তার কর্মের অনুমতি দেয়া । অর্থাৎ সে তার দায়িত্তের মধ্যে কি কি করতে পারবে তা নির্ধারন করে দেয়াই হল অথরাইজেশন । চাইলেই তার দায়িত্ব থেকে অব্যাহতি দেয়া যায় বা কাজের পরিধি সীমিত করা যায় । অথেনটিকেশন হল মুলত প্রমান করা ।  কারো পরিচয় সম্পর্কে সত্যতা প্রমান করা । বর্তমানে বিভিন্ন ভাবে অথেনটিকেশন বা পরিচয় এর সত্যতা নেয়া হল যেমন মোবইল নাম্বার, ইমেইল এর মাধ্যমে । </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='border-0'>
                        <Card.Body>
                            <Card.Title><h3>Difference between authorization and authentication</h3></Card.Title>
                            <Card.Text>
                                <p><span className='fw-bold'>Answer:</span> </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='border-0'>
                        <Card.Body>
                            <Card.Title><h3>Difference between authorization and authentication</h3></Card.Title>
                            <Card.Text>
                                <p><span className='fw-bold'>Answer:</span> </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Blogs;