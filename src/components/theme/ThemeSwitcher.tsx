import React, { useContext } from "react";
import { Icon, Checkbox } from "semantic-ui-react";
import { ThemeContext } from "../../context/ThemeContext";


interface Props { }

const ThemeSwitcher: React.FC<Props> = (): JSX.Element => {
    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <div className="toggle_icon">
            <Icon name="sun outline"
            />
            <Checkbox onChange={toggleTheme} toggle checked={theme === "dark"} />
            <Icon name="moon outline"
            />
        </div>
    );
};

export default ThemeSwitcher;
