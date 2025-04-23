const margin = {left: 5, right: 5, top: 5, bottom: 5};

export function bitcoinNewsChart() {
    
    const svg = d3.select('#svgBitcoinNews');
    
    const dimensions = svg.node().getBoundingClientRect();
    const width = dimensions.width;
    const height = dimensions.height;

    innerWidth = width - margin.left - margin.right;
    innerHeight = height - margin.top - margin.bottom;
    
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);
        
}