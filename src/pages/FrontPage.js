import MediaQuery from 'react-responsive';

export const FrontPage = () => {

    return (
        <div>
            <h1>Device Test!</h1>
                   {/*  For Desktop View */} 
                    <MediaQuery minWidth={1024}>
                        <p>You are a desktop or laptop</p>
                    
                    
                    
                    {/*  For Tablet View */} 
                    <MediaQuery maxDeviceWidth={1024}>
                        <p>Tablet view</p>
                    

                    {/* Mobile Portrait View */}
                    <MediaQuery maxDeviceWidth={480} orientation='portrait'>
                        <p>Mobile Portrait View</p>
                    

                    {/* For Mobile Landscape View */}
                    <MediaQuery maxDeviceWidth={640} orientation='landscape'>
                        <p>Mobile Landscape View</p>
                    

                    {/* For Mobile Phones Portrait or Landscape View */}
                    <MediaQuery maxDeviceWidth={640}>
                        <p>For Mobile Phones Portrait or Landscape View</p>
                    

                    {/* For iPhone 4 Portrait or Landscape View */}
                    <MediaQuery minDeviceWidth={320} minDeviceAspectRatio='2'>
                        <p>For iPhone 4 Portrait or Landscape View</p>
                    

                    {/* For iPhone 5 Portrait or Landscape View */}
                    <MediaQuery deviceHeight={568} deviceWidth={320}>
                        <p>For iPhone 5 Portrait or Landscape View</p>
                    

                    {/* For iPhone 6 and 6 plus Portrait or Landscape View */}
                    {/* <MediaQuery minDeviceHeight={667} minDeviceWidth={375}>
                        <p>For iPhone 6 and 6 plus Portrait or Landscape View</p>
                    </MediaQuery> */}
                   </MediaQuery>
                   </MediaQuery>
                   </MediaQuery>
                   </MediaQuery>
                   </MediaQuery>
                   </MediaQuery>
                   </MediaQuery> 
        </div>

    )
}
