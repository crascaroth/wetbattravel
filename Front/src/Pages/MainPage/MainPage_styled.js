
import { styled, alpha } from '@mui/material/styles';

export const BodyContainer = styled('div')(({ theme }) => ({

    
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        gridTemplateRows: '1fr',
        gridColumnGap: '0px',
        gridRowGap: '0px',
        
}));

export const SideBarContainer = styled('div')(({ theme }) => ({ 

    gridArea: 1 / 1 / 2 / 2


}));

export const DashboardContainer = styled('div')(({ theme }) => ({ 

    gridArea: 1 / 2 / 2 / 11


}));