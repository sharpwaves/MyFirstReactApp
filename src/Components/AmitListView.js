function AmitListView(props)
{
    const items = [1,2,3];
    const newItems = items.map(x => x*2);
    const element = 
    (
        <div> 
            <h1> amit list view </h1>
            
            { <ul>
                { props.posts.map(post => 
                    {
                        return (<li key={post.id}> {post.title}</li>)
                    })
                }
                </ul> 
            }
            {console.log(props.posts)}
            <ul>
            {
                items.map((item) => 
                {
                    return (<li key={item}> {item*5} </li>);
                })
            }
            </ul>
        </div>
            
            
    )
    return (element);
}
export default AmitListView;
// const posts = 
// [
//   {id:100, title:"hello world", content:"welcome to hello"},
//   {id:200, title:"installation", content:"you can install from npm"},
// ]